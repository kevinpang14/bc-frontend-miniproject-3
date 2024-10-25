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

//Front-End Developer START - SIRP LSP ISP INHERITANCE COMPOSITION
class FrontEndDeveloper extends Developer {
  constructor(name, style) {
    super(name);
    this.style = style; //style is a composition
  }

  //POLYMORPHISM
  createPlan() {
    console.log(`${this.name} is creating Front-end Developer plan`);
  }

  //Creating ISP Abstraction for workOnProject
  workOnProject() {
    this.createHTML();
    this.createStyle();
    this.createJavascript();
  }

  //-----------------------------------------------------
  createHTML() {
    console.log(`${this.name} is creating HTML`);
  }
  //DIP ABSTRACTION
  createStyle(style) {
    this.style.applyStyle(); //Applying style with Custom CSS or Bootstrap modules - composition
  }
  createJavascript() {
    console.log(`${this.name} is creating Javascript Functionality`);
  }
}
//---------------------------------------------------------

//DIP ABSTRACTION
//Modules for applying style - composition
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

//Front-End Developer Senior START - OCP
class FrontEndDeveloperSenior extends FrontEndDeveloper {
  constructor(name) {
    super(name);
  }
  createAnimation() {
    console.log(`${this.name} is creating Animation`);
  }
}

//Front-End Developer Senior END

//Back-End Developer START - SIRP LSP INHERITANCE

class BackEndDeveloper extends Developer {
  constructor(name) {
    super(name);
  }

  //POLYMORPHISM
  createPlan() {
    console.log(`${this.name} is creating Back-end Developer plan`);
  }
  createDb() {
    console.log(`${this.name} is creating Database`);
  }
  createServer() {
    console.log(`${this.name} is creating Server`);
  }
  createAPI() {
    console.log(`${this.name} is creating API`);
  }
}

//Back-End Developer END

//Designer START SIRP
class Designer {
  constructor(name) {
    this.name = name;
  }
  createDesign() {
    console.log(`${this.name} is creating Design mockups`);
  }
}

//Designer END

//Project START - SIRP
class Project {
  constructor(name) {
    this.name = name;
    this.projectManager = null;
    this.frontEndDeveloper = null;
    this.frontEndDeveloperSenior = null;
    this.backEndDeveloper = null;
    this.designer = null;
  }

  addProjectManager(projectManager) {
    this.projectManager = projectManager;
  }

  addFrontEndDeveloper(frontEndDeveloper) {
    this.frontEndDeveloper = frontEndDeveloper;
  }

  addFrontEndDeveloperSenior(frontEndDeveloperSenior) {
    this.frontEndDeveloperSenior = frontEndDeveloperSenior;
  }

  addBackEndDeveloper(backEndDeveloper) {
    this.backEndDeveloper = backEndDeveloper;
  }

  addDesigner(designer) {
    this.designer = designer;
  }

  buildProject() {
    console.log(`Start Building Project ${this.name}\n`);

    this.projectManager.manageProject(this);
    this.projectManager.createProject(this);
    this.projectManager.createProjectPlan(this);
    this.projectManager.createProjectBudget(this);

    this.frontEndDeveloper.createPlan();
    this.frontEndDeveloper.workOnProject();

    this.frontEndDeveloperSenior.createAnimation();

    this.backEndDeveloper.createDb();
    this.backEndDeveloper.createServer();
    this.backEndDeveloper.createAPI();

    this.designer.createDesign();

    console.log(`Project ${this.name} Development Completed\n\n`);
  }

  generateProjectReport() {
    console.log(`--- Project Report: ${this.name} ---`);
    console.log(`Project Manager: ${this.projectManager.name}`);
    console.log(`Front-End Developer: ${this.frontEndDeveloper.name}`);
    console.log(
      `Front-End Developer Senior: ${this.frontEndDeveloperSenior.name}`
    );
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
  constructor(name, budget) {
    this.name = name;
    this.budget = budget;
  }
  manageProject(project) {
    console.log(`${this.name} is managing Project ${project.name}`);
  }
  createProject(project) {
    console.log(`${this.name} is creating Project ${project.name}`);
  }
  createProjectPlan(project) {
    console.log(
      `${this.name} is creating Project Plan for Project ${project.name}`
    );
  }
  createProjectBudget(project) {
    console.log(
      `${this.name} creating Project Budget for Project ${project.name}`
    );
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

const project1 = new Project("E-Commerce Website");

//Project Manager
const projectManager1 = new ProjectManager("John", 100000);
projectManager1.manageProject(project1);
projectManager1.createProject(project1);
projectManager1.createProjectPlan(project1);
projectManager1.createProjectBudget(project1);

//Front-End Developer
const frontEndDeveloper1 = new FrontEndDeveloper("Alice", new CustomCSS());

//Front-End Developer Senior
const frontEndDeveloperSenior1 = new FrontEndDeveloperSenior("Belinda");

//Back-End Developer
const backEndDeveloper1 = new BackEndDeveloper("Bob");

//Designer
const designer1 = new Designer("Eva");

console.log(projectManager1);
console.log(frontEndDeveloper1);
console.log(frontEndDeveloperSenior1);
console.log(backEndDeveloper1);
console.log(designer1);
console.log(project1);

project1.addProjectManager(projectManager1);
project1.addFrontEndDeveloper(frontEndDeveloper1);
project1.addBackEndDeveloper(backEndDeveloper1);
project1.addDesigner(designer1);
project1.addFrontEndDeveloperSenior(frontEndDeveloperSenior1);
console.log(`\n\n`);
project1.generateProjectReport();
console.log(`\n\n`);
project1.buildProject();
console.log(`\n\n`);
