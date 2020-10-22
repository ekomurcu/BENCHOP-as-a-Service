function [time,relerr] = Table_run(problem, sig)

  format long

  warning on

  Methods={'MC','MC-S','QMC-S','MLMC','MLMC-A',...
           'FFT','FGL','COS',...
           'FD','FD-NU','FD-AD',...
           'RBF','RBF-FD','RBF-PUM','RBF-LSML','RBF-AD','RBF-MLT'};

  if problem == 1
    [time, relerr] = Table_p1a(sig);
  elseif problem == 2
    [time, relerr] = Table_p1b(sig);
  elseif problem == 3
    [time, relerr] = Table_p1c(sig);
  elseif problem == 4
    [time, relerr] = Table_p2a(sig);
  elseif problem == 5
    [time, relerr] = Table_p2b(sig);
  elseif problem == 6_
    [time, relerr] = Table_p2c(sig);
  end
end
