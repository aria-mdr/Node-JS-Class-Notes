console.log('inside js')

const todo = {
    inputValue: '',
    items: [],
/**
 * this function adds input value to the items array
 * builds a checkbox for the items and adds it to list-container
 */
    addItem : () => {
        const item = todo.inputValue
        todo.items.push(item)
        const inputid =  item.replace(' ', '-')

        const listContainer = document.getElementById('list-container')

        const formCheck = document.createElement('div')
        formCheck.classList.add('form-check')

        const input = document.createElement('input')
        input.classList.add('form-check-input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('value', '')
        input.setAttribute('id', inputid)

        const label = document.createElement('label')
        label.classList.add('form-check-label')
        label.setAttribute('for', inputid)
        label.innerHTML = item

        formCheck.appendChild(input)
        formCheck.appendChild(label)
        listContainer.appendChild(formCheck)
    },
/**
 * handels typing
 * @param event - event that trigged event handelrs
 *  - event.target.value: used to get what user has typed
 *  - event.keyCode: used to get what jey they entered
 * @returns 
 */
    handelType: (event) => {
        const value = event.target.value

        // user hit enter
        if(event.keyCode == 13 && value.length > 0) {
            todo.addItem()
            todo.inputValue = ''
            event.target.value = ''
            return;
        }

        todo.inputValue = value
    },

    init: () => {
        const input = document.getElementById('input')
        input.addEventListener('keyup', todo.handelType)
    }
}

todo.init()