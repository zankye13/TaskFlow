const tasks = require('../data/tasks');

// tum gorevleri listeler 
const getAllTasks = (req, res) => {
    let result = [...tasks];
    const { status, priority, assignee, sort, page, limit } = req.query;

    if (status) {
        result = result.filter(t => t.status.toLowerCase() === status.toLowerCase());
    }
    if (priority) {
        result = result.filter(t => t.priority.toLowerCase() === priority.toLowerCase());
    }
    if (assignee) {
        result = result.filter(t => t.assignee.toLowerCase().includes(assignee.toLowerCase()));
    }

    if (sort) {
        const sortField = sort.startsWith('-') ? sort.substring(1) : sort;
        const isDesc = sort.startsWith('-');
        
        result.sort((a, b) => {
            if (a[sortField] < b[sortField]) return isDesc ? 1 : -1;
            if (a[sortField] > b[sortField]) return isDesc ? -1 : 1;
            return 0;
        });
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    if (!isNaN(pageNum) && !isNaN(limitNum)) {
        const startIndex = (pageNum - 1) * limitNum;
        const endIndex = pageNum * limitNum;
        const paginatedResult = result.slice(startIndex, endIndex);
        
        return res.json({
            success: true,
            page: pageNum,
            limit: limitNum,
            totalCount: result.length,
            count: paginatedResult.length,
            data: paginatedResult
        });
    }

    res.json({
        success: true,
        count: result.length,
        data: result
    });
};

// id ye gore gorev listeleme 
const getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Aradığınız ID'ye sahip görev bulunamadı!"
        });
    }

    res.json({
        success: true,
        data: task
    });
};

// goreve gore arama 
const searchTasks = (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({
            success: false,
            message: "Arama yapmak için 'keyword' parametresi gereklidir!"
        });
    }

    const filtered = tasks.filter(t => 
        t.title.toLowerCase().includes(keyword.toLowerCase()) || 
        t.description.toLowerCase().includes(keyword.toLowerCase())
    );

    res.json({
        success: true,
        keyword,
        count: filtered.length,
        data: filtered
    });
};

// gorev sahibinin ismine gore gorev listeleme
const getTasksByAssignee = (req, res) => {
    const assigneeName = req.params.name;
    const filtered = tasks.filter(t => t.assignee.toLowerCase() === assigneeName.toLowerCase());

    res.json({
        success: true,
        assignee: assigneeName,
        count: filtered.length,
        data: filtered
    });
};

// yeni gorev olusturma
const createTask = (req, res) => {
    const { title, description, priority, assignee, status } = req.body;

    const newTask = {
        id: Date.now().toString(),
        title,
        description,
        priority,
        assignee,
        status: status || "Bekliyor",
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "Görev başarıyla oluşturuldu.",
        data: newTask
    });
};

// put ile gorev guncelleme
const updateTask = (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Güncellenecek görev bulunamadı!"
        });
    }

    const { title, description, priority, assignee, status } = req.body;

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title,
        description,
        priority,
        assignee,
        status: status || tasks[taskIndex].status
    };

    res.json({
        success: true,
        message: "Görev başarıyla tamamen güncellendi (PUT).",
        data: tasks[taskIndex]
    });
};

// patch ile gorev guncelleme
const patchTask = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Güncellenecek görev bulunamadı!"
        });
    }

    const { title, description, priority, assignee, status } = req.body;

    // sadece body de gonderilen alanları guncelle
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (priority !== undefined) task.priority = priority;
    if (assignee !== undefined) task.assignee = assignee;
    if (status !== undefined) task.status = status;

    res.json({
        success: true,
        message: "Görev başarıyla kısmi olarak güncellendi (PATCH).",
        data: task
    });
};

// delete islemi
const deleteTask = (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Silinecek görev bulunamadı!"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.json({
        success: true,
        message: "Görev başarıyla silindi.",
        data: deletedTask[0]
    });
};

module.exports = {
    getAllTasks,
    getTaskById,
    searchTasks,
    getTasksByAssignee,
    createTask,
    updateTask,
    patchTask,
    deleteTask
};