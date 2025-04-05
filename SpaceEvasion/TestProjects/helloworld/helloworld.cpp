#include <iostream>
using namespace std;

void insert (int *a, int n) {
    int k = a[n];
    int i = n - 1; // index that k will be compared to
    while (i >= 0 && a[i] > k){
        a[i + 1] = a[i];
        i--;
    } //loop ends when i == -1 or a[i] <= k
    a[i + 1] = k;
}

int pop_front(int *a, int s) {
    for (int i = 0; i < s; i++){
        cout << a[i] << ", " << endl;
    }
    return s;
}

int push_front(int *a, int s, int k){
    for (int i = s; i >= s; i--){
        a[i] = a[i - 1];
    }
    a[0] = a[k];
    return s + 1;
}

int push_back(int *a, int s, int k){
    a[s] = k;
    return s + 1;
}



int main()
{
    int a[100] = {18, 1, 89, 3, 10, 0, 4, 20};

    int i;
    for (i = 0; i < 6; i++){
        cout << a[i] << ", ";
    }
    cout << endl;

    insert(a, 6);
    
    for (i = 0; i < 6; i++){
        cout << a[i] << ", ";
    }
    cout << endl;
}
