function [time,relerr] = Table_run(problem, K, T, r, sig)

  format long

  warning on

  Methods={'MC','MC-S','QMC-S','MLMC','MLMC-A',...
           'FFT','FGL','COS',...
           'FD','FD-NU','FD-AD',...
           'RBF','RBF-FD','RBF-PUM','RBF-LSML','RBF-AD','RBF-MLT'};

  if problem == 1
    [time, relerr] = Table_p1a(K, T, r, sig);
  elseif problem == 2
    [time, relerr] = Table_p1b(K, T, r, sig);
  elseif problem == 3
    [time, relerr] = Table_p1c(K, T, r, sig);
  elseif problem == 4
    [time, relerr] = Table_p2a(K, T, r, sig);
  elseif problem == 5
    [time, relerr] = Table_p2b(K, T, r, sig);
  elseif problem == 6_
    [time, relerr] = Table_p2c(K, T, r, sig);
  end
end
