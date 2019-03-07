#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>

using namespace std;

template <class T>
void showAll(T& v, string title) {
  cout << title;
for (auto iter = v.begin(); iter != v.end(); ++iter) {
    cout << *iter << ' ';
  }
cout << endl;
}

int main() {
  vector<string> words; words.reserve(3);
words.push_back("hello"); words.push_back("world"); words.push_back("!");
  showAll(words, "before:");
  reverse(words.begin(),words.end());
  showAll(words, "after:");

  vector<int> ints; ints.reserve(3);
  ints.push_back(1); ints.push_back(2); ints.push_back(3);
  showAll(ints, "before:");
reverse(ints.begin(),ints.end());
showAll(ints, "after:");
  return 0;
}
