using System;

namespace CadastroAluno
{
  class Program
  {
    static void Main(string[] args)
    {
      Aluno[] alunos = new Aluno[5];
      var indiceAluno = 0;
      string opcaoUsuario = ObterOpcaoUsuario();

      while (opcaoUsuario.ToUpper() != "X")
      {
        switch (opcaoUsuario)
        {
          case "1":
            Console.WriteLine("Informe o nome do aluno:");
            Aluno aluno = new Aluno();
            aluno.Nome = Console.ReadLine();

            Console.WriteLine("Informe a nota do aluno:");
            if (decimal.TryParse(Console.ReadLine(), out decimal nota))
            {
              aluno.Nota = nota;
            }
            else
            {
              throw new ArgumentOutOfRangeException("A nota não foi informada corretamente. Tente novamente.");
            }

            alunos[indiceAluno] = aluno;
            indiceAluno++;
            break;
          case "2":
            foreach (var a in alunos)
            {
              if (!string.IsNullOrEmpty(a.Nome))
                Console.WriteLine($"ALUNO: {a.Nome} NOTA: {a.Nota}");
            }
            break;
          case "3":
            decimal notaTotal = 0;
            var nrAlunos = 0;
            for (var i = 0; i < alunos.Length; i++)
            {
              if (!string.IsNullOrEmpty(alunos[i].Nome))
              {
                notaTotal = notaTotal + alunos[i].Nota;
                nrAlunos++;
              }
            }

            var mediaGeral = notaTotal / nrAlunos;
            Conceito conceitoGeral = new Conceito();

            if (mediaGeral <= 3)
            {
              conceitoGeral = Conceito.E;
            }
            else if (mediaGeral > 3 && mediaGeral <= 5)
            {
              conceitoGeral = Conceito.D;
            }
            else if (mediaGeral > 5 && mediaGeral <= 7)
            {
              conceitoGeral = Conceito.C;
            }
            else if (mediaGeral > 7 && mediaGeral <= 9)
            {
              conceitoGeral = Conceito.B;
            }
            else if (mediaGeral > 9)
            {
              conceitoGeral = Conceito.A;
            }

            Console.WriteLine($"MÉDIA GERAL: {mediaGeral} - CONCEITO: {conceitoGeral}");
            break;
          default:
            throw new ArgumentOutOfRangeException();
        }

        opcaoUsuario = ObterOpcaoUsuario();
      }
    }

    private static string ObterOpcaoUsuario()
    {
      Console.WriteLine("Informe a opção desejada: \n1- Inserir um novo aluno \n2-Lista alunos \n3-Calcular média geral \nX- Sair.");

      string opcaoUsuario = Console.ReadLine();
      return opcaoUsuario;
    }
  }
}
