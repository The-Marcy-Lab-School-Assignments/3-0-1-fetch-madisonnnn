const userUrl = 'https://jsonplaceholder.typicode.com/users'
/** FEEDBACK: Super proud of all of the work you put in to complete this! Keep it up :) */
export const checkResponseStatus = () => {
 return fetch(userUrl)
  .then(res => {
    return {
      status: res.status, 
      ok: res.ok, 
      url: res.url
    }
    }) .catch (err => {
    console.error(err.name, err.message)
    throw err
  })
};

export const getUsers = () => {
  return fetch(userUrl)
  .then(res => {
    if (!res.ok) {
      throw new Error('error');
    }
    return res.json()
  })
  .then(users => {
    return users
    }) .catch (err => {
    console.error(err.name, err.message)
    throw err
  })
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  .then(res => {
    if(!res.ok){
      throw new Error('error')
    }
    return res.json()
  })
  .then(posts => {
    return posts.slice(0, maxNumPosts)
    }) .catch (err => {
    console.error(err.name, err.message)
    throw err
  })
};

export const createNewUser = (newUserData) => {
  return fetch(userUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserData)
  }) .then(res => {
    if (!res.ok) {
      throw new Error('error');
    }
    return res.json();
  }) .then(user => {
    return user 
    }) .catch (err => {
    console.error(err.name, err.message)
    throw err
  })
}
