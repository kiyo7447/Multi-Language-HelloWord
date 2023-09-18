# COBOL
## Build
```bash
docker build -t cobol-image .
```
## Run Docker
```bash
# Linux
docker run -it --rm --name cobol-container -v $(pwd):/app cobol-image /bin/bash
# Windows PowerShell
docker run -it --rm --name cobol-container -v ${PWD}:/app cobol-image /bin/bash
# Windows Command Prompt
docker run -it --rm --name cobol-container -v %cd%:/app cobol-image /bin/bash

```
# Run COBOL
```bash
cobc -x -free -o hello hello.cobol
./hello
```


