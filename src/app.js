import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const {statusDiv, usersUl, postsUl, newUserForm, newUserDiv} = setupPageBasics(appDiv)

  checkResponseStatus().then((status) => renderStatus(statusDiv,status))

  getUsers().then((users) => renderUsers(usersUl, users))

  usersUl.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
      const buttonData = e.target.dataset.userId 
      getUserPosts(buttonData).then((user) => {
        renderPosts(postsUl,user)
      })
    }
  })

  newUserForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const postData = Object.fromEntries(formData.entries())
    createNewUser(postData).then((user) => {
      renderNewUser(newUserDiv,user)
    })
    e.target.reset()
  })
}