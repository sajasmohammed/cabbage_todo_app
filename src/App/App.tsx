import React, { useRef } from "react";
import {
	ListGroup,
	ListGroupItem,
	InputGroup,
	FormControl,
	Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { deleteTodo, markComplete, markIncomplete } from "action/index";
import storeType from "types/storeType";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({
	complete,
	incomplete,
	deleteTodo,
	markComplete,
	markIncomplete,
}) => {
	const input = useRef<HTMLInputElement>(null);

	const renderList = (type: "Active List" | "In Active List") => {
		const looper = type === "Active List" ? complete : incomplete;
		return (
			<ListGroup variant="flush" className="m-2">
				<h3>{type}</h3>
				{looper.map((todo, index) => {
					return (
						<ListGroupItem
							key={index}
							variant={type === "Active List" ? "success" : "danger"}
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<div>{todo}</div>
							<div>
								<Button variant={`${type === "Active List" ? "contained btn-success" : "contained btn-danger"
									}`} onClick={() => {
										type === "Active List"
											? markIncomplete(todo)
											: markComplete(todo);
									}}>{type === "Active List" ? "inactive" : "active"}</Button>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<Button
									variant={`${type === "Active List" ? "btn btn-info" : "btn btn-warning"}`}
									onClick={() => deleteTodo(todo)}
								>
									Delete
								</Button>
							</div>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);
	};

	const addTodo = () => {
		if (input.current) {
			const val = input.current.value;
			input.current.value = "";
			markIncomplete(val);
		}
	};

	return (
		<div className="card">
			<div className="card-body col-sm-12">
				<div className="row">
					<h1 className="text-center text-danger">Welocme to Todo App</h1>
					<br /><br /><br />
					<InputGroup >
						<FormControl placeholder="Todo" ref={input} />
						<InputGroup.Append>
							<Button variant="info" onClick={() => addTodo()}>
								Add Todo
							</Button>
						</InputGroup.Append>
					</InputGroup>
					
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								{renderList("In Active List")}
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								{renderList("Active List")}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

const mapStateToProps = (state: storeType) => {
	return {
		complete: state.complete,
		incomplete: state.incomplete,
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	markComplete,
	markIncomplete,
})(App);
