//aqui definimos todas as rotas possíveis na aplicação 
//podemos ter um contexto de rota para cada situação.
//StackRoutes conseguimos fazer a navegação Login-Homepage
import { NavigationContainer } from '@react-navigation/native'

import { StackRoutes } from './stack'


export function LoginRoutes() {
    return (
        <NavigationContainer>
            <StackRoutes/>          
        </NavigationContainer>
    )
}
