clear
close all

format long

%addpath(genpath('./')); %adds all the functions from subfolders to the path
%mfiles=getfilenames('./','BSeuCallU*.m')

warning off

Methods={'MC','MC-S','QMC-S','MLMC','MLMC-A',...
    'FFT','FGL','COS',...
    'FD','FD-NU','FD-AD',...
    'RBF','RBF-FD','RBF-PUM','RBF-LSML','RBF-AD','RBF-MLT'};

%% Problem 1 a) I
Table_p1a;
%Table_p1b;
%Table_p1c;
%Table_p2a;
%Table_p2b;
%Table_p2c;

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Table2=table(tBSeuCallUI,tBSamPutUI,tBSupoutCallI,tBSeuCallUII,tBSamPutUII,tBSupoutCallII,'RowNames',Methods)
%err=[rBSeuCallUI,rBSamPutUI,rBSupoutCallI,rBSeuCallUII,rBSamPutUII,rBSupoutCallII];

%Table2=table(tBSeuCallUI, 'RowNames',Methods)
%err=[rBSeuCallUI];
tBSeuCallUI

%err=round(log10(err));

% Now use this table as input in our input struct:
%input.data = Table2;
%input.error = err;

% Set the row format of the data values (in this example we want to use
% integers only):
%input.dataFormat = {'%.1e'};

% Switch transposing/pivoting your table:
%input.transposeTable = 1;

% Column alignment ('l'=left-justified, 'c'=centered,'r'=right-justified):
%input.tableColumnAlignment = 'c';

% Switch table borders on/off:
%input.tableBorders = 0;

% Switch to generate a complete LaTex document or just a table:
%input.makeCompleteLatexDocument = 0;

%latex = latexTable(input);
