#include <iostream>
#include <string>
using namespace std;

int add(int a, int b) { return a + b; }
std::string add(const char* a, const char* b) {
  std::string result(a);
  result += b;
  return result;
}

int main() {
  std::cout << add(5,9) << endl;
  cout << add("hello", "world") << endl;
  return 1;
}
