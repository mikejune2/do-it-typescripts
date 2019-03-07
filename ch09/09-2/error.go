package main

import (
	"errors"
	"fmt"
	"os"
)

func calcValue(value int) (int, error) {
	if value <= 0 {
		return 0, errors.New("value should be greater than 0")
	}
	return value / 10, nil
}

func main() {
	value, err := calcValue(0)
	if err != nil {
		fmt.Println("Error:", err.Error())
		os.Exit(1)
	}
	fmt.Printf("value=%d.\n", value)
}
