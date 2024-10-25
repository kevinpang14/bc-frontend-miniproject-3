//MINI PROJECT 3
//UNDERSTANDING AND IMPLEMENTING SOLID PRINCIPLES

//MAIN REQUIREMENTS - START
class Developer {
  createPrototype() {}
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
  manageSecurity() {}
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
  assignTeam(project) {}
  createProject(project) {}
  createProjectPlan(project) {}
  createProjectBudget(project) {}
}

//Project Manager END

//Software Tester START
class SoftwareTester {
  testProject(projectBeta) {}
}

//Software Tester END

//DevOps START
class DevOps {
  deployProject(project) {}
  monitorProject(project) {}
}
//DevOps END

//Business Analyst START
class BusinessAnalyst {
  analyzeProject(project) {}
  createRequirement(project) {}
  createUserStory(project) {}
  createBusinessProcess(project) {}
  createBusinessCase(project) {}
  createBusinessModel(project) {}
}
//Business Analyst END
