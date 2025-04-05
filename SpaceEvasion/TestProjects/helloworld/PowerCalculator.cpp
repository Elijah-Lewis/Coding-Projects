#include <iostream>
using namespace std;

long long power (int x, int n) {
    if (n == 0) {
        return 1;
    }
    long long temp = power(x, n/2);
    if (n % 2 == 0){
        return temp * temp;
    }
    else{
        return temp * temp * x;
    }
}

int main (){
    cout << power(3, 160) << endl;
    return 0;
}