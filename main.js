//MINI PROJECT 3
//UNDERSTANDING AND IMPLEMENTING SOLID PRINCIPLES

//MAIN REQUIREMENTS - START
class Developer {
  createPlan() {}
  workOnProject() {}
}

//Front-End Developer START
class FrontEndDeveloper extends Developer {
  createHTML() {}
  createCSS() {}
  createJavascript() {}
  createUX() {}
}

//Front-End Developer END

//Back-End Developer START

class BackEndDeveloper extends Developer {
  createDb() {}
  createServer() {}
  createAPI() {}
}

//Back-End Developer END

//Designer START
class Designer {
  createDesign() {}
  createUI() {}
}

//Designer END

//Project START
class Project {
  buildProject() {}
}

//Project END

//MAIN REQUIREMENTS - END

//Project Manager START
class ProjectManager {
  manageProject(project) {}
  createProject(project) {}
  createProjectPlan(project) {}
  createProjectBudget(project) {}
}

//Project Manager END

class TeamLeader {
  manageTeam(team) {}
  assignTask(team) {}
  assignProject(team) {}
  assignBudget(team) {}
}

//Software Tester START
class SoftwareTester {
  testProject(projectBeta) {}
}

//Software Tester END

//Business Analyst START
class BusinessAnalyst {
  analyzeProject(project) {}
  createRequirement(project) {}
  createUserStory(project) {}
}
//Business Analyst END
