# Erreurs de clonage HTTPS
> error: The requested URL returned error: 401 while accessing
> https://github.com/USER/REPO.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed

> Error: The requested URL returned error: 403 while accessing
> https://github.com/USER/REPO.git/info/refs
> fatal: HTTP request failed

# Vous pouvez trouver l'URL du dépôt local en ouvrant la ligne de commande et en tapant git remote -v :
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/cocoareactive.git (fetch)
> origin  https://github.com/ghost/cocoareactive.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)

# Erreur : Le dépôt distant principal fait référence à une référence inexistante. Impossible d'effectuer l'extraction
$ git clone https://github.com/USER/REPO.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.

# Après cela, vous pourrez obtenir la liste de toutes les branches disponibles à partir de la ligne de commande :
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main

# Ensuite, il vous suffira de basculer vers votre nouvelle branche :
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
