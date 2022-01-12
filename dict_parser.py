#This code is used to parse words in  /usr/share/dict/words for all words of length 5
from typing import List

DICT : str = "dict.txt";
WORDS: str = "words.txt";

def find_words_of_len_5() -> None:
    words = open(WORDS,"w");
    with open(DICT) as file_path:
        lines = file_path.readlines();
        for line in lines:
            if len(line) == 6 and "'" not in line and line.islower():
                words.write(line);
    words.close();


find_words_of_len_5();
