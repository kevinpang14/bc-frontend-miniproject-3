Understanding and Implementing SOLID Principles in Javascript

SOLID

1. Single Responsibility Principle (SRP)
   Each class should have only one responsibility.

   In this example, FrontEndDeveloper and BackEndDeveloper classes have a single responsibility. Each class is responsible for its own functionality. So do the Designer and ProjectManager.

2. Open-Closed Principle (OCP)
   Classes should be open for extension but closed for modification.

   In this example, FrontEndDeveloper class is open for extension by adding new features, but it is closed for modification, so creating new class for new features is preferred, by creating FrontEndDeveloperSenior class

3. Liskov Substitution Principle (LSP)
   Subtypes must be substitutable for their base types without altering the function of the program.

   In this example, FrontEndDeveloper class is a subtype of Developer class, so it can be substituted for the base class.

4. Interface Segregation Principle (ISP)
   Clients should not be forced to depend on methods they do not use.

   In this example, FrontEndDeveloper class implements the Developer interface, but it only uses the methods that are relevant to front-end development. (workOnProject) method is used for front-end development, so it is included in the interface.

5. Dependency Inversion Principle (DIP)
   High-level modules should not depend on low-level modules. Both should depend on abstractions.

   The FrontEndDeveloper class depends on an abstraction for styling (applyStyle) method, allowing for flexibility in selecting a styling method like CustomCSS or Bootstrap.
