with import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/24.05.tar.gz") { };

stdenv.mkDerivation {
  name = "react-editext";

  buildInputs = with pkgs; [
    git
    nodejs_20
    tmux
    yarn
  ];

  shellHook = ''
    develop () {
      yarn install && cd example && yarn install && cd ..

      tmux \
        new-session  'yarn start' \; \
        split-window 'cd example && yarn start'
    }
  '';
}

