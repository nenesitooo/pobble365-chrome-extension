(function () {
  'use strict'

  const base = 'http://www.pobble365.com'

  fetch(`${base}/api/v1`)
    .then(response => response.json())
    .then(data => getTodayPicture(data.resource_id))

  function getTodayPicture (resourceId) {
    fetch(`${base}/api/v1/resources/${resourceId}`)
      .then(response => response.json())
      .then(resource => render(resource))
  }

  function render (resource) {
    document.body.style.backgroundImage = `url(${resource.picture_of_the_day.url})`
    document.querySelector('h1').textContent = resource.title
    document.querySelector('span').textContent = resource.picture_of_the_day.credit
  }
})()
