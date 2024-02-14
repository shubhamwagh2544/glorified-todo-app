import { useState } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import ToDoModal from "./ToDoModal";

export function ProjectHome(props) {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoDescription, setToDoDescription] = useState("");
    const [toDoModal, setToDoModal] = useState(false);

    const toggleToDoModal = () => {
        setToDoModal(!toDoModal);
    }

    const todos = [{
        id: 1,
        title: "Call parents",
        description: "They're in Jaipur, so only call during the night. They're in Jaipur, so only call during the night. They're in Jaipur, so only call during the night. They're in Jaipur, so only call during the night.",
        status: "Yet to Start"
    }, {
        id: 2,
        title: "Complete Cohort",
        description: "Work on videos from week 8",
        status: "Yet to Start"
    }, {
        id: 3,
        title: "Laundry",
        description: "Use the new machines in the room",
        status: "In Progress"
    }, {
        id: 4,
        title: "Something",
        description: "ifbvkjbxc",
        status: "In Progress"
    }]

    const ytsTodos = todos.filter((todo) => {
        return todo.status === "Yet to Start";
    });
    
    const ipTodos = todos.filter((todo) => {
        return todo.status === "In Progress";
    });
    
    const cTodos = todos.filter((todo) => {
        return todo.status === "Completed";
    });
    

    // console.log(ytsTodos);
    // console.log(ipTodos);
    // console.log(cTodos);

    const [yetToStartTodo, setYetToStartTodo] = useState(ytsTodos);
    const [inProgressTodo, setInProgressTodo] = useState(ipTodos);
    const [completedTodo, setCompletedTodo] = useState(cTodos);

    const columnMapping = {
        "yetToStart": "Yet to Start",
        "inProgress": "In Progress",
        "completed": "Completed"
    }

    const onDragEnd = (result) => {
        // console.log(result);
        const { destination, source, draggableId } = result;
    
        if (!destination) {
            return;
        }
    
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
    
        // Determine source and destination column
        let sourceColumn, destinationColumn;
        if (source.droppableId === 'yetToStart') {
            sourceColumn = yetToStartTodo;
        } else if (source.droppableId === 'inProgress') {
            sourceColumn = inProgressTodo;
        } else if (source.droppableId === 'completed') {
            sourceColumn = completedTodo;
        }
    
        if (destination.droppableId === 'yetToStart') {
            destinationColumn = yetToStartTodo;
        } else if (destination.droppableId === 'inProgress') {
            destinationColumn = inProgressTodo;
        } else if (destination.droppableId === 'completed') {
            destinationColumn = completedTodo;
        }

        // console.log(sourceColumn);
        // console.log(destinationColumn);

        // Remove dragged item from source column
        const draggedItem = sourceColumn.splice(source.index, 1)[0];

        // console.log(draggedItem);
        // console.log(sourceColumn);

        draggedItem.status = columnMapping[destination.droppableId];
    
        // Insert dragged item into destination column
        destinationColumn.splice(destination.index, 0, draggedItem);
        
        // console.log(destinationColumn);

        // Update state with new arrays
        setYetToStartTodo([...yetToStartTodo]);
        setInProgressTodo([...inProgressTodo]);
        setCompletedTodo([...completedTodo]);

        // console.log(yetToStartTodo);
        // console.log(inProgressTodo);
        // console.log(completedTodo);
    }
    
    

    return (
        <div className="h-screen opacity-90">
            <ToDoModal 
                setToDoTitle={setToDoTitle} 
                toDoTitle={toDoTitle} 
                toDoModal={toDoModal} 
                setToDoModal={setToDoModal} 
                setToDoDescription={setToDoDescription} 
                toDoDescription={toDoDescription}
                toggle={toggleToDoModal}
            />
            <div className="w-full px-16 py-8 flex justify-between items-center">
                <p className="text-6xl font-bold">{props.projectName}</p>
                <Button label="Add To-do" toggle={toggleToDoModal} />
            </div>
            <div className="px-16">
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="bg-blue-marguerite-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: props.projectProgress}}>{props.projectProgress}</div>
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="px-16 mt-2 grid grid-cols-3 py-3 gap-4 h-5/6">
                    <div className="col-span-1 bg-red-200 rounded-xl">
                        <div className="flex justify-center items-center h-8 border-b-2 border-blue-marguerite-300 font-bold">
                            Yet to Start
                        </div>
                        <Droppable droppableId="yetToStart">
                            {(provided) => (
                                <div className="flex flex-col p-4 justify-center items-center w-full" ref={provided.innerRef} {...provided.droppableProps}>
                                    {yetToStartTodo.map((todo, index) => (
                                        todo.status == "Yet to Start" ? <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} index={index} /> : ""
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    <div className="col-span-1 bg-yellow-200 rounded-xl">
                        <div className="flex justify-center items-center h-8 border-b-2 border-blue-marguerite-300 font-bold">
                            In Progress
                        </div>
                        <Droppable droppableId="inProgress">
                            {(provided) => (
                                <div className="flex flex-col p-4 justify-center items-center w-full" ref={provided.innerRef} {...provided.droppableProps}>
                                    {inProgressTodo.map((todo, index) => (
                                        todo.status == "In Progress" ? <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} index={index} /> : ""
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    <div className="col-span-1 bg-green-200 rounded-xl">
                        <div className="flex justify-center items-center h-8 border-b-2 border-blue-marguerite-300 font-bold">
                            Completed
                        </div>
                        <Droppable droppableId="completed">
                            {(provided) => (
                                <div className="flex flex-col p-4 justify-center items-center w-full" ref={provided.innerRef} {...provided.droppableProps}>
                                    {completedTodo.map((todo, index) => (
                                        todo.status == "Completed" ? <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} index={index} /> : ""
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
}

function Button(props) {
    return (
        <button 
            className="cursor-pointer relative inline-flex items-center pr-12 pl-10 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            onClick={props.toggle}
        >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative">{props.label}</span>
        </button>
    );
}
