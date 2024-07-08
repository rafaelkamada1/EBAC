const alunos = [
    { nome: "Alice", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Diana", nota: 6 },
    { nome: "Eva", nota: 4 },
    { nome: "Felipe", nota: 9 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);



