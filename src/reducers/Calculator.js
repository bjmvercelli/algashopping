export default function(state = 0, action) { /*PS: Aqui setamos o  valor do state igual a  0 apenas na primeira passagem quando o state for nulo*/
    switch(action.type){
        case 'SUM':
            return action.payload[0] + action.payload[1];
        case 'SUBTRACT':
            return action.payload[0] - action.payload[1];
        default:
            return state; 
    }
}