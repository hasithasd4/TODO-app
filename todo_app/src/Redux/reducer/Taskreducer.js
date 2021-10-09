

const initilState=[

    {
            id:0,
            task: "go home",
            time: "12",
            date: "dsd"
    },
    {
        id:2,
        task: "go to home",
        time: "12",
            date: "dsd"
        
            },
];

const Taskreducer = (state= initilState,action) =>{
    switch(action.type){
        case "ADD_TASK":
        state =[...state,action.payload]
        return state;

        case "DELETE_TASK":
            const filterTack= state.filter(taskd=>taskd.id !==action.payload&& taskd);
            state = filterTack;
            return state;
        default:
            return state;
    } 
};
export default Taskreducer;