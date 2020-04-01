import React, { Component } from "react";
import "./App.css";
import Jay from "./bluejay.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class BD extends Component {
    constructor(prop) {
      super(prop);
      this.state = {
        schedule1: [],
        schedule2: [],
        schedule3: []
      };
    }
  
    callAPI() {
      fetch("http://localhost:5000/api/bd/courses")
        .then(res => res.json())
        .then(res => this.setState({ 
          schedule1: res.slice(0, 3),
          schedule2: res.slice(3, 6),
          schedule3: res.slice(6, 9)}))
        .catch(err => err);
    }
  
    componentDidMount() {
      this.callAPI();
    }
  
    render() {
      const list1 = this.state.schedule1.map(d => {
        return (
          <li>
            {d.CourseNumber}
            {": "}
            {d.CourseTitle}
            {" Credit:"}
            {d.Credits}
            {" Instructor:"}
            {d.Instructor}
          </li>
        );
      });
      const list2 = this.state.schedule2.map(d => {
        return (
          <li>
            {d.CourseNumber}
            {": "}
            {d.CourseTitle}
            {" Credit:"}
            {d.Credits}
            {" Instructor:"}
            {d.Instructor}
          </li>
        );
      });
      const list3 = this.state.schedule3.map(d => {
        return (
          <li>
            {d.CourseNumber}
            {": "}
            {d.CourseTitle}
            {" Credit:"}
            {d.Credits}
            {" Instructor:"}
            {d.Instructor}
          </li>
        );
      });
      return (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src = {Jay} style = {{width: 50, height: 50, float:"left"}}></img>
            MY PATH
          </h1>
          <div class = "schoolyear_Box">
            <div class = "hh1">FRESHMAN YEAR</div>
          <div class="text1">
            <div class = "hh2">Semester 1</div>
          </div>
          <div class="box1">{list1}</div>
          <div class="text1">
            <div class = "hh3">Semester 2</div>
          </div>
          <div class="box2">{list2}</div>
          </div>

          <div class = "schoolyear_Box">
            <div class = "hh1">SOPHOMORE YEAR</div>
          <div class="text1">
            <div class = "hh2">Semester 3</div>
          </div>
          <div class="box1">{list1}</div>
          <div class="text1">
            <div class = "hh3">Semester 4</div>
          </div>
          <div class="box2">{list2}</div>
          </div>

          <div class = "schoolyear_Box">
            <div class = "hh1">JUNIOR YEAR</div>
          <div class="text1">
            <div class = "hh2">Semester 5</div>
          </div>
          <div class="box1">{list1}</div>
          <div class="text1">
            <div class = "hh3">Semester 6</div>
          </div>
          <div class="box2">{list2}</div>
          </div>

          <div class = "schoolyear_Box">
            <div class = "hh1">SENIOR YEAR</div>
          <div class="text1">
            <div class = "hh2">Semester 7</div>
          </div>
          <div class="box1">{list1}</div>
          <div class="text1">
            <div class = "hh3">Semester 8</div>
          </div>
          <div class="box2">{list2}</div>
          </div>

          <div>
          <Link to="/">
            <button class = "button_r" type="button">
              Go Back
            </button>
            <i class="iconfont" style={{position: "absolute", right: "40px"}}>&#xe7f9;</i>
          </Link>
      </div>
          
        </div>
      );
    }
  }

  export default BD;