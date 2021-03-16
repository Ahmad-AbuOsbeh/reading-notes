Git Intro

VCS : version control systems that can handle with all versions of files, to edit or run it, regardless the file has an old or a new version.

types of VCS :

- local VCS :that's depends on one database on the hard disk then store the changes of the files and versions overthere.
- centralized VCS :have single server storing all changes and accsess many programmers to use.
- distributed VCS : the server can save a backup of your files and you can restore them anytime.

- snapshot : when press commit the system will save the edited file only, if it's not edited it will stay saving the old one.

- local operations : independent of online connection or VPN.

** you should define your identity to use the Git by your username and email.

** $ git config --global core.editor name >>> this command to change the defualt text editor.

** $ git clone https://github.com/test >>> this command to save all versions to ahh files in a test file.

** git stash : it's an important command in windows terminal that allows you to hidden the changes ( not saving them ) and when you need to work with these agian can put this command to be unhidden : git stash apply

- Remote Repositories : it's a way to access files from other servers and to make them access your data.

** git remote : this command to view your available remotes.

** git remote -v : this command to view the remote files URL and it's status (push or fetch).




