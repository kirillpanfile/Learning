interface user {
    name? : string;
    som? : number;
}
export class G964 {
    public static rank(st : string | any, we :
        Array<number> | any, n :number | any) :string {    
        if (st === "") return "No participants"
        if(n > st.length) return "Not enough participants"
        let users : user[] = [];
        let pp : Array<number> = st.split(',').map((el,idx)=> {
            return (el.split('').reduce((total,el)=> (total + el.toLowerCase().charCodeAt(0) - 96),0) + el.length) * we[idx]
        }).forEach((el,idx)=> {users.push({name : st.split(',')[idx],som : el})})
        users.sort((a,b)=> b.som - a.som)
        for (let i = 0; i< users.length-1; i++) {
            if(users[i].som == users[i+1].som) {
                if (!users[i].name.localeCompare(users[i+1].name)) {
                    console.log(true);
                    let tmp = users[i]
                    users[i] = users[i+1]
                    users[i+1] = tmp
                }
            }
            
        }
        return users[n-1].name
    }
}

console.log(G964.rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH",[1, 4, 4, 5, 2, 1],4));
console.log(G964.rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2));
console.log(G964.rank("Elijah,William,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2));


// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
