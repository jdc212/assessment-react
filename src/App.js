import {Container} from './Components/Container/Container.js'
import {IdCard} from './Components/IdCard/IdCard'
import {Counter} from './Components/Counter/Counter'


function App() {
  return (
    <div>
      <Container>
        <section id="container">
        <IdCard
           fullName='John Doe'
            gender='male'
             birthday="1992-07-14"
             picture="https://randomuser.me/api/portraits/men/44.jpg"
         />
        </section>

        <section id="container">
        <IdCard 
          fullName='Obrien Delores'
          gender='female'
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </section>


       </Container>
    
 

    <Counter />
    </div>

  );
}

export default App;
