### Unions
What is a Union?
    Unions allow you to declare a variable that could be more than one type or morde than one value
    
    Example: let myVariable: string | boolean;
             let myName: "Isaiah" | "Jesse";

### Generics
What are Generics
    Generics provide variables to types. Whe declareing a string array you can use string[]
    but if you wanted to use the built in array interface Array<> you can insert its type
    between the aligators Array<string>

    We will using Generics for built in functions and types, such as the useState<> and its type
    setActionState<>

    Example: let [name, setName] = useState<string>("")

    You can also use Generics like parameters when creating interfaces

    Example: interface IStuff<Generic> { stuff: <Generic> }