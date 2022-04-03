const homeContent = {
    title: 'Hello',
    featured: [
      '1',
      '2',
    ]
  }
  
  const post1 =
    `---
  title: this is test collection
  id: 1
  ---`
  
  const post2 =
    `---
  title: this is second test collection
  id: 2
  ---`
  
  export default {
    '_data': {
      '_home.json': {
        'content': JSON.stringify(homeContent, null, 2)
      }
    },
    '_posts': {
      'this-is-text-collection.md': {
        'content': post1
      },
      'this-is-second-test-collection.md': {
        'content': post2
      }
    }
  }