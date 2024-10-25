//MINI PROJECT 3
//UNDERSTANDING AND IMPLEMENTING SOLID PRINCIPLES

//MAIN REQUIREMENTS - START
class Developer {
  constructor(name) {
    this.name = name;
  }

  createPlan() {
    console.log("Create developer plan");
  }
  workOnProject() {}
}

//Front-End Developer START .. SIRP INHERITANCE
class FrontEndDeveloper extends Developer {
  constructor(name, style) {
    super(name);
    this.style = style;
  }

  //POLYMORPHISM
  createPlan() {
    console.log("Create Front-end Developer plan");
  }

  //Creating Abstraction for workOnProject
  workOnProject() {
    this.createHTML();
    this.createStyle();
    this.createJavascript();
    this.createAnimation();
  }

  //-----------------------------------------------------
  createHTML() {
    console.log("Create HTML");
  }
  //DIP ABSTRACTION
  createStyle(style) {
    this.style.applyStyle(); //Applying style with Custom CSS or Bootstrap modules
  }
  createJavascript() {
    console.log("Create Javascript Functionality");
  }
  createAnimation() {
    console.log("Create Animation");
  }
}
//---------------------------------------------------------

//DIP ABSTRACTION
//Modules for applying style
class CustomCSS {
  applyStyle() {
    console.log("Using Custom CSS");
  }
}

class Bootstrap {
  applyStyle() {
    console.log("Using Bootstrap");
  }
}

//Front-End Developer END

//Back-End Developer START .. SIRP INHERITANCE

class BackEndDeveloper extends Developer {
  constructor(name) {
    super(name);
  }

  //POLYMORPHISM
  createPlan() {
    console.log("Create Back-end Developer plan");
  }
  createDb() {
    console.log("Create Database");
  }
  createServer() {
    console.log("Create Server");
  }
  createAPI() {
    console.log("Create API");
  }
}

//Back-End Developer END

//Designer START
class Designer {
  constructor(name) {
    this.name = name;
  }
  createDesign() {
    console.log("Create Design mockups");
  }
}

//Designer END

//Project START
class Project {
  constructor(name) {
    this.name = name;
    this.projectManager = null;
    this.frontEndDeveloper = null;
    this.backEndDeveloper = null;
    this.designer = null;
  }

  addProjectManager(projectManager) {
    this.projectManager = projectManager;
  }

  addFrontEndDeveloper(frontEndDeveloper) {
    this.frontEndDeveloper = frontEndDeveloper;
  }

  addBackEndDeveloper(backEndDeveloper) {
    this.backEndDeveloper = backEndDeveloper;
  }

  addDesigner(designer) {
    this.designer = designer;
  }

  buildProject() {
    console.log(`Start Building Project ${this.name}\n`);
    this.frontEndDeveloper.createPlan();
    this.frontEndDeveloper.workOnProject();
    this.backEndDeveloper.createDb();
    this.backEndDeveloper.createServer();
    this.backEndDeveloper.createAPI();
    this.designer.createDesign();
    this.projectManager.manageProject();
    this.projectManager.createProject();
    this.projectManager.createProjectPlan();
    this.projectManager.createProjectBudget();
    console.log(` Project ${this.name} Development Completed\n\n`);
  }

  generateProjectReport() {
    console.log(`Project Report: ${this.name}`);
    console.log(`Project Manager: ${this.projectManager.name}`);
    console.log(`Front-End Developer: ${this.frontEndDeveloper.name}`);
    console.log(`Back-End Developer: ${this.backEndDeveloper.name}`);
    console.log(`Designer: ${this.designer.name}`);
    console.log(`--- End of Report ---\n`);
  }
}

//Project END

//MAIN REQUIREMENTS - END

//ADVANCED REQUIREMENTS - START
//Project Manager START
class ProjectManager {
  constructor(name) {
    this.name = name;
  }
  manageProject(project) {
    console.log(`Managing Project ${project.name}`);
  }
  createProject(project) {
    console.log(`Creating Project ${project.name}`);
  }
  createProjectPlan(project) {
    console.log(`Creating Project Plan for Project ${project.name}`);
  }
  createProjectBudget(project) {
    console.log(`Creating Project Budget for Project ${project.name}`);
  }
}

//Project Manager END

class TeamLeader {
  constructor(name) {
    this.name = name;
  }
  manageTeam(team) {}
  assignTask(team) {}
  assignProject(team) {}
  assignBudget(team) {}
}

//Software Tester START
class SoftwareTester {
  constructor(name) {
    this.name = name;
  }
  testProject(projectBeta) {}
}

//Software Tester END

//Business Analyst START
class BusinessAnalyst {
  constructor(name) {
    this.name = name;
  }
  analyzeProject(project) {}
  createRequirement(project) {}
  createUserStory(project) {}
}
//Business Analyst END

//DevOps START
class DevOps {
  constructor(name) {
    this.name = name;
  }
  deployProject(project) {}
  monitorProject(project) {}
}
//DevOps END

//Collaborating Classes START
class Collaborating {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
  }
  collaborate(name1, name2) {
    console.log(`${name1} and ${name2} are collaborating`);
  }
}

//ADVANCED REQUIREMENTS - END

//Debugging, Testing and Usage

console.log("--- Debugging, Testing and Usage ---");
console.log(`\n\n`);

//Creating Team 1
const projectManager1 = new ProjectManager("John");
const frontEndDeveloper1 = new FrontEndDeveloper("Alice", new CustomCSS());
const backEndDeveloper1 = new BackEndDeveloper("Bob");
const designer1 = new Designer("Eva");
const project1 = new Project("E-Commerce Website");

console.log(projectManager1);
console.log(frontEndDeveloper1);
console.log(backEndDeveloper1);
console.log(designer1);
console.log(project1);

project1.addProjectManager(projectManager1);
project1.addFrontEndDeveloper(frontEndDeveloper1);
project1.addBackEndDeveloper(backEndDeveloper1);
project1.addDesigner(designer1);
console.log(`\n\n`);
project1.buildProject();
project1.generateProjectReport();
console.log(`\n\n`);
