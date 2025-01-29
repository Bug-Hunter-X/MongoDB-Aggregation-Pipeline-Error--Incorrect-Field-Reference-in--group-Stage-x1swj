```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some condition */ }},
  {$group: {_id: "$fieldName", sum: {$sum: "$anotherField"}}}, // Incorrect field reference
  {$sort: {sum: -1}}
])
```