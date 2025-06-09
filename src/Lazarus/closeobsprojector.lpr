program closeobsprojector;

{$mode objfpc}{$H+}

uses
  Windows, SysUtils, Classes;

var
  WindowList: TStringList;
  TituloProjetores: array[0..8] of string = (
    'Projetor em tela cheia',       // pt
    'Espelhar pré-visualização',                  // pt
    'Visualização Múltipla',        // pt
    'Fullscreen Projector',         // en
    'Multiview (Fullscreen)',       // en
    'Proyector de pantalla completa', // es
    'Projecteur en plein écran',    // fr
    'Proiettore a schermo intero',  // it
    '????????????? ????????'        // ru
  );
  TituloProjetoresNormalizados: array[0..8] of string;

// Função para remover acentos (substitui caracteres acentuados pelos equivalentes sem acento)
function RemoveAcentos(const S: string): string;
const
  Acentuados = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇ';
  SemAcento  = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
var
  i, j: Integer;
  c: Char;
begin
  Result := '';
  for i := 1 to Length(S) do
  begin
    c := S[i];
    j := Pos(c, Acentuados);
    if j > 0 then
      Result := Result + SemAcento[j]
    else
      Result := Result + c;
  end;
end;

// Função de enumeração de janelas
function EnumWindowsProc(hWnd: HWND; lParam: LPARAM): BOOL; stdcall;
var
  TitleW: array[0..255] of WideChar;
  PID: DWORD;
  TituloOriginal, TituloNormalizado: String;
  i: Integer;
begin
  GetWindowTextW(hWnd, TitleW, Length(TitleW));
  TituloOriginal := UTF8Encode(WideCharToString(TitleW));

  if IsWindowVisible(hWnd) and (Length(TituloOriginal) > 0) then
  begin
    GetWindowThreadProcessId(hWnd, @PID);
    if PID = GetCurrentProcessId then
    begin
      Result := True;
      Exit;
    end;

    WindowList.Add(TituloOriginal);

    // Normaliza o título da janela capturada
    TituloNormalizado := UpperCase(RemoveAcentos(TituloOriginal));

    // Verifica se começa com algum dos títulos normalizados
    for i := 0 to High(TituloProjetoresNormalizados) do
    begin
      if Pos(TituloProjetoresNormalizados[i], TituloNormalizado) = 1 then
      begin
        Writeln('Fechando janela: ', TituloOriginal);
        PostMessage(hWnd, WM_CLOSE, 0, 0);
        Break;
      end;
    end;
  end;

  Result := True;
end;

var
  i: Integer;

begin
  // Normaliza a lista de títulos de projetores (uppercase + sem acento)
  for i := 0 to High(TituloProjetores) do
    TituloProjetoresNormalizados[i] := UpperCase(RemoveAcentos(TituloProjetores[i]));

  WindowList := TStringList.Create;
  try
    EnumWindows(@EnumWindowsProc, 0);
    SetConsoleOutputCP(CP_UTF8); // Ativa UTF-8 na saída do console

    Writeln('Total de janelas visíveis encontradas: ', WindowList.Count);
    for i := 0 to WindowList.Count - 1 do
      Writeln('  ', WindowList[i]);

  finally
    WindowList.Free;
  end;
end.

