const state = ['Post Reminder 1', 'Post R 2', 'Post R 3', "post r 4"];

const listElements = state.map((reminder) => {
  /**
   * The element looks like this
   * <li class="reminder-item">
        <div>Post reminder 1</div>
        <div>
          <button class="button-56">Postpone 1 hour</button>
          <button class="button-56">Postpone 1 day</button>
          <button class="button-56">Dismiss</button>
        </div>
     </li>
   */
  /**
   * 1. Find out how to create an html element with JS (hint document.createElement())
   * 2. how to add a class to an HTML element with JS
   * 3. how to append a child to an HTML element with JS
   * 4. BONUS: find out how to add `reminder` as text for the div 
   */

  const newElement = document.createElement('li');

  return newElement
});

const list = document.querySelectorAll('ul')[0];

document.querySelectorAll(".button-56")
  .forEach((button)=> button.addEventListener('click', ()=> button.parentElement.parentElement.remove() ))
