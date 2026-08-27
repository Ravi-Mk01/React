 const element = React.createElement(
            'h1',
            {
                style: {backgroundColor: "orange", color: "black", fontSize: "30px"},
                id: "first",
                className: "ele1"
            },
            "Hello Coder's"
        );

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(element);

// The code looks similar, but there are differences in how React actually works internally.
// How React Actually Works (Deep Dive)
// Key Concept: Virtual DOM
// Our library directly creates real DOM elements. But **real React does something different.
// What React.createElement Actually Returns:

// const React = {
//     createElement: function(type, props, children){
//         return {  // Returns a plain JavaScript object (Virtual DOM)
//             type: type,
//             props: {
//                 ...props,
//                 children: children
//             }
//         };
//     }
// };

// const element = React.createElement('h1', { id: 'title' }, 'Hello');

// console.log(element);
// Output: (Just a JavaScript object!)
// {
//     type: 'h1',
//     props: {
//         id: 'title',
//         children: 'Hello'
//     }
// }
// This object is called Virtual DOM - it's NOT a real DOM element, just a description of what we want.


// What ReactDOM Actually Does:
// ReactDOM takes the Virtual DOM object and converts it to real DOM:
// const ReactDOM = {
//     createRoot: function(container){
//         return {
//             render: function(reactElement){
//                 // Convert Virtual DOM to Real DOM
//                 const element = document.createElement(reactElement.type);

//                 for(const key in reactElement.props){
//                     if(key === 'style'){
//                         Object.assign(element.style, reactElement.props.style);
//                     }
//                     else if(key === 'children'){
//                         element.textContent = reactElement.props[key];
//                     }
//                     else {
//                         element[key] = reactElement.props[key];
//                     }
//                 }

//                 container.appendChild(element);
//             }
//         };
//     }
// };

/**
 Why two separate libraries?
 Answer: Because React creates platform-agnostic descriptions
 (Virtual DOM), and different renderers convert them to platform-specific UI.**

 Your Code
    ↓
React.createElement() → Creates Virtual DOM (JavaScript object)
    ↓
Virtual DOM (works everywhere - web, mobile, PDF, VR)
    ↓
    ├─→ ReactDOM → Browser (HTML elements)
    ├─→ React Native → Mobile (iOS/Android components)
    ├─→ React PDF → PDF documents
    └─→ React VR → Virtual Reality

    
 */