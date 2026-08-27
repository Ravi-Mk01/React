
// Create first element
// const h1 = document.createElement('h1');
// h1.style.backfaceVisibility = 'orange';
// h1.style.color = 'black';
// h1.style.fontSize = '30px';
// h1.id = 'first';
// h1.className = 'ele1';
// h1.textContent = 'Hello friends....'
// document.getElementById('root').appendChild(h1);



// // Create second element
// const h2 = document.createElement('h2');
// h2.style.color = 'green';
// h2.id = 'second';
// h2.className = 'ele2';
// h2.textContent = 'What is going on';
// document.getElementById('root').appendChild(h2);

// If I want to Create third element... (repetitive!)

/**
 **Problems:**
1. Repetitive code
2. Hard to maintain
3. Error-prone
4. Not reusable


## Solution 1: Create Our Own Helper Library

Let's create a simple library to make element creation easier:
**Benefits:**

-  Cleaner code
-  Reusable
-  Easy to create multiple elements
 */

const React = {
    createElement: function(tag, attribute, children){
        const element = document.createElement(tag);

        for(const key in attribute){
            if(key=='style'){
                Object.assign(element.style, attribute[key]);
            }
            else{
                element[key] = attribute[key];
            }
        }

        element.textContent = children;

        return element;

    }
}

const ReactDOM = {
    render: function(element, root){
        root.appendChild(element);
    }
}

const element1 = React.createElement(
    'h1',
    {
        style:{
            backgroundColor: "orange", color: "black", fontSize: "30px"
        },

        id: "first",
        className: 'ele1'
    },
    "Hello Guys...."
);

ReactDOM.render(element1, document.getElementById('root'));



