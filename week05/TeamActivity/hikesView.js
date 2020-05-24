// the dataset only has a relative path in it...we need more to find the images...so we have a path variable below. Why isn't this in the model object? What advantages or disadvantages are there to having it here instead of as part of the View object?
const imgBasePath = './img/';

// since we have multiple methods we need to export, it would make sense to group them together with an object of some sort. This could be as simple as an object literal...or more complex as a class.

class HikesView {
  renderHikeList(hikeListElement, hikeList) {
    // I decided to let the controller handle where the list gets placed. So instead of getting the element here in the function, when I created the view I decided to pass the target element in.
    // const hikeListElement = document.getElementById('hikes');

    hikeListElement.innerHTML = '';
    // the list of hikes doesn't exist here in the view either...so I've passed that in as well.
    hikeList.forEach(hike => {
      // notice the call to 'this' below. 'this' is like adding './' at the beginning of a path. It helps the computer find things.
      hikeListElement.appendChild(this.renderOneHikeLight(hike));
    });
  }

  renderOneHikeLight(hike) {
    const item = document.createElement('li');
    item.classList.add('light');
    // setting this to make getting the details for a specific hike easier later.
    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h3>${hike.name}</h3>
    <div class="external">
    <div class="internal"><img src="${imgBasePath}${hike.imgSrc}" alt="${
      hike.imgAlt
      }"></div>
    <div class="internal">
            <div class="detail">
                <h4>Distance</h4>
                <p>${hike.distance}</p>
            </div>
            <div class="detail">
                <h4>Difficulty</h4>
                <p>${hike.difficulty}</p>
            </div>
            </div>
    </div>`;
  
    return item;
  }

  renderOneHikeFull(parent, hike) {
    // const backButton = document.createElement('input type="submit"');
    // backButton.innerHTML = '&lt;- All Hikes';

    const item = document.createElement('li');
    item.innerHTML = ` 
     <input type="submit" Value="&lt;- All Hikes" />  
    <div class="centralizedItems"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <h3>${hike.name}</h3>
            <div>
                <h4>Distance</h4>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h4>Difficulty</h4>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h4>Description</h4>
                <p>${hike.description}</p>
            </div>
            <div>
                <h4>How to get there</h4>
                <p>${hike.directions}</p>
            </div>
        
        `;
    parent.innerHTML = '';
    // item.insertBefore(backButton, item.childNodes[0]);
    parent.appendChild(item);
    // send the button back to the controller to attach a listener
    return item;
  }
}
export default HikesView;