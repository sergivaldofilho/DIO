using System;

namespace DigitalInnovationOne
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Informe um número: ")
      int R = Int32.Parse(Console.ReadLine());
      Console.WriteLine("Informe outro número: ")
      int V = Int32.Parse(Console.ReadLine());
      int qtdNumV = 0;
      
      if (R >= V)
      {
        do 
        {
          qtdNumV++;
          V = Int32.Parse(Console.ReadLine());
        } while (R >= V);
        Console.WriteLine(qtdNumV);
      } else 
      {
        Console.WriteLine(qtdNumV);
      }
    }
  }
}
