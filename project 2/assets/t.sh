#!/bin/bash
mkdir -p /home/admin/useraccounts

for i in $@
do
    useradd $i

    < /dev/urandom tr -dc A-Na-n1-9_ | head -c8 > /tmp/passwd.txt

    pwd=$(cat /tmp/passwd.txt)
    echo -e "$pwd\n$pwd" | passwd $i
    echo -e "Username:$i\n" > /home/admin/useraccounts/$i
    echo -e "password:\n" >> /home/admin/useraccounts/$i
    cat /tmp/passwd.txt >> /home/admin/useraccounts/$i
done

rm -rf /tmp/passwd.txt



Just a Kid
For a Memory
Tightrope
Everything U Need
