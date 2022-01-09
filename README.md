# SNOW-Angular-Forms

- Handling user input with forms is the cornerstone of many common applications. 
- Applications use forms to enable users to log in, to update a profile, to enter sensitive information, and to perform many other data-entry tasks.
- Angular provides two different approaches to handling user input through forms: reactive and template-driven. 
- Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

## choosing an approach
- Reactive forms and template-driven forms process and manage form data differently. Each approach offers different advantages.
- Reactive forms provide direct, explicit access to the underlying forms object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.
- Template-driven forms rely on directives in the template to create and manipulate the underlying object model. - - They are useful for adding a simple form to an app, such as an email list signup form. They're easy to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

## COmmon form foundation classes
- Both reactive and template-driven forms are built on the following base classes.
- FormControl tracks the value and validation status of an individual form control.
- FormGroup tracks the same values and status for a collection of form controls.
- FormArray tracks the same values and status for an array of form controls.
- ControlValueAccessor creates a bridge between Angular FormControl instances and native DOM elements.

## Template driven forms
- Enable Template Driven Forms by adding FormsModule to our application root module.
- The form is set up using ngForm directive
- controls are set up using the ngModel directive
- ngModel also provides the two-way data binding
- The Validations are configured in the template via directives

## Reactive Forms
- Import ReactiveFormsModule
- Create Form Model in component class using Form Group, Form Control & Form Arrays
- Create the HTML Form resembling the Form Model.
- Bind the HTML Form to the Form Model











