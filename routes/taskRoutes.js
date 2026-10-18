const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    getTaskById,
    searchTasks,
    getTasksByAssignee,
    createTask,
    updateTask,
    patchTask,
    deleteTask
} = require('../controllers/taskController');
const validateTask = require('../middlewares/validateTask');

// Ozel Routelar (id route undan once tanimlanmali)
/* Express.js routeları yukarıdan asagiya sırayla eslestirir. '/search' ve '/assignee/:name' gibi sabit/ozel routelar, dinamik parametre 
 alan '/:id' route undan once yazılmalıdır mutlaka. Aksi takdirde Express, '/api/tasks/search' istegindeki 'search' kelimesini 
 bir id olarak algılar ve arama fonksiyonu yerine getTaskById'yi tetikler
*/
router.get('/search', searchTasks);               // GET /api/tasks/search?keyword=...
router.get('/assignee/:name', getTasksByAssignee); // GET /api/tasks/assignee/ayse

// temel crud operasyonlari ve filtreleme, siralama, sayfalama
router.get('/', getAllTasks);                     // GET /api/tasks?status=...&priority=...&page=1&limit=5
router.get('/:id', getTaskById);                 // GET /api/tasks/:id

// dogrulama middleware iceren routelar
router.post('/', validateTask, createTask);       // POST /api/tasks
router.put('/:id', validateTask, updateTask);     // PUT /api/tasks/:id
router.patch('/:id', validateTask, patchTask);    // PATCH /api/tasks/:id

// delete route 
router.delete('/:id', deleteTask);                // DELETE /api/tasks/:id

module.exports = router;