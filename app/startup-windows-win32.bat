@ECHO OFF
chcp 65001 > nul

SET PYTHON_VER=3.10.11
SET DL_PYTHON=python-%PYTHON_VER%-embed-win32\
SET APP_DIR=sd-webui-prompt-all-in-one-app

cd /d %~dp0
SET BASE_PATH=%~dp0
SET PYTHONPATH=%BASE_PATH%%DL_PYTHON%
SET PATH=%PYTHONPATH%;%PYTHONPATH%Scripts;%PATH%
SET USERPROFILE=%PYTHONPATH%home
SET HOME=%PYTHONPATH%home
SET PYTHONUSERBASE=%PYTHONPATH%home\.local

if not exist %HOME% mkdir %DL_PYTHON%home

SET PYTHON_EXE=%PYTHONPATH%python.exe
SET PIP_EXE=%PYTHONPATH%Scripts\pip3.exe

if not exist %PIP_EXE% python %PYTHONPATH%get-pip.py

pip -V >nul 2>&1
if %errorlevel% neq 0 python -m pip install --upgrade --force-reinstall pip

(
    echo python310.zip
    echo .
    echo ../%APP_DIR%
    echo Lib/site-packages
    echo import site
) > %PYTHONPATH%python310._pth

echo import sys;import os;sys.path.insert(0,os.path.dirname(sys.argv[0])) > %PYTHONPATH%Lib\site-packages\start_path.pth

python -V
pip -V

cd .\%APP_DIR%
pip install -r requirements.txt
python install.py
python app.py