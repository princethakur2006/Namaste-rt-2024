const parent = React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Iam h1 tag"),
        React.createElement("h2",{},"Iam h2 tag")]),

        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Iam h1 tag"),
            React.createElement("h2",{},"Iam h2 tag")
        ])
    ]);





const heading = React.createElement("h1",
    { id:"prince", abc :"xyz"},
    "Hello world using React"
);

console.log(heading); // returns Object & h1 is a react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);// this render method convert this object intro  h1 tag 
