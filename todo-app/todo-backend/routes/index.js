const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const { setAsync, getAsync } = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET usage metadata. */
router.get('/statistics', async (req, res) => {
  const todosCount = await getAsync('added_todos')
  res.send({
    'added_todos': todosCount || 0
  })
})

module.exports = router;
