Algoritmo Operaciones_B�sicas

//Entrada
//declaramos variables
n1<-0
n2<-0
menu<-0
//Instrucci�n general
Escribir "Ingrese dos numeros que desee operar";
//solicitamos el primer valor
Escribir "Inserte primer numero: ";
leer n1;
//Solicitamos el segundo valor
Escribir "Inserte segundo numero: ";
leer n2;
//mostramos las opciones para realizar la operaci�n
Escribir " ";
Escribir "Menu de Opciones";
Escribir " ";
Escribir "(1) Sumar";
Escribir "(2) Restar";
Escribir "(3) Multiplicar";
Escribir "(4) Dividir";
Escribir " ";
leer menu;
escribir " ";

//indicamos como se ejecutar� la seleci�n del usuario para operar ambos valores
segun menu Hacer
	1: Escribir "Vas a sumar";
		Escribir "La suma es: ",n1+n2;
		
	2: escribir "Vas a restar";
		Escribir "La resta es: ",n1-n2; 
		
	3: Escribir "vas a multiplicar";
		Escribir "La multiplicacion es: ",n1*n2;
		
	4: Escribir "Vas a Dividir";
		Mientras n2=0 Hacer
			Escribir "Divides por 0. Resultado Indefinido";
			Escribir " ";
			Escribir "Vuelve a insertar el segundo numero:";
			leer n2;
		FinMientras
		Escribir "La division es: ",n1/n2;
		
		
	//en caso de que no se ingrese algun dato valido
	De Otro Modo:
		Escribir "No se encuentra numero de operacion";
		
FinSegun

FinProceso

