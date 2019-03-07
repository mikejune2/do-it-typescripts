#include <stdio.h>
#include <string.h>
struct Person  {
  char name[80];
  int age;
};
typedef struct Person Person;
void main() {
  Person person;

  strcpy(person.name, "Jane");
  person.age = 22;
  printf("name:%s, age:%d", person.name, person.age);
}
