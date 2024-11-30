### **Basic Commands**
1. **`git init`**  
   Initializes a new Git repository in your project folder.

2. **`git clone <repository-url>`**  
   Copies a remote repository to your local machine.

3. **`git status`**  
   Shows the current status of your working directory, including changes and files staged for commit.

4. **`git add <file>`**  
   Stages a specific file for commit.  
   Use `git add .` to stage all changes.

5. **`git commit -m "message"`**  
   Commits the staged changes with a descriptive message.

6. **`git push`**  
   Uploads your commits to a remote repository.

7. **`git pull`**  
   Fetches and merges changes from a remote repository to your local branch.

8. **`git branch`**  
   Lists all branches in your repository. Use `git branch <branch-name>` to create a new branch.

9. **`git checkout <branch-name>`**  
   Switches to the specified branch.  
   Use `git checkout -b <branch-name>` to create and switch to a new branch.

10. **`git merge <branch-name>`**  
    Merges the specified branch into the current branch.

### **Undo Changes**
11. **`git reset <file>`**  
    Unstages a file while keeping its changes in the working directory.

12. **`git reset --hard`**  
    Resets the working directory to the last commit, discarding all changes.

13. **`git revert <commit-hash>`**  
    Reverts a specific commit by creating a new commit that undoes the changes.

14. **`git stash`**  
    Temporarily saves changes not ready for commit. Use `git stash pop` to restore them.

### **Log and History**
15. **`git log`**  
    Shows the commit history. Use `git log --oneline` for a concise view.

16. **`git diff`**  
    Shows the changes between commits, branches, or your working directory and the index.

### **Working with Remotes**
17. **`git remote add <name> <url>`**  
    Adds a new remote repository.

18. **`git fetch <remote>`**  
    Downloads objects and refs from a remote repository without merging them.

19. **`git remote -v`**  
    Lists the remote repositories and their URLs.

### **Tagging**
20. **`git tag <tag-name>`**  
    Creates a tag to mark a specific commit.  
    Use `git push --tags` to upload tags to a remote repository.

Would you like any further explanation on these commands?