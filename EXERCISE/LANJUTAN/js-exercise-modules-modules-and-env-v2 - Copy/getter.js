function mapUsers(users) {
  return {
    data: users,
    count: users.length
  }
  }

  export default mapUsers;

function mapArticles(articles) {
  return {
    data: articles,
    count: articles.length
  }
  }

export {
  mapArticles,
  mapUsers
};