foldersTree = gFld("<b>InspIRCd</b>", "", "")
     insDoc(foldersTree, gLnk("Main Page", "", "main.html"))
aux1 = insFld(foldersTree, gFld("File List", "", "files.html"))
       insDoc(aux1, gLnk("base.h", "", "base_8h.html"))
       insDoc(aux1, gLnk("channels.h", "", "channels_8h.html"))
       insDoc(aux1, gLnk("connection.h", "", "connection_8h.html"))
       insDoc(aux1, gLnk("ctables.h", "", "ctables_8h.html"))
       insDoc(aux1, gLnk("modules.cpp", "", "modules_8cpp.html"))
       insDoc(aux1, gLnk("modules.h", "", "modules_8h.html"))
       insDoc(aux1, gLnk("servers.cpp", "", "servers_8cpp.html"))
       insDoc(aux1, gLnk("servers.h", "", "servers_8h.html"))
       insDoc(aux1, gLnk("users.cpp", "", "users_8cpp.html"))
       insDoc(aux1, gLnk("users.h", "", "users_8h.html"))
aux1 = insFld(foldersTree, gFld("Compound List", "", "annotated.html"))
       insDoc(aux1, gLnk("Admin", "", "classAdmin.html"))
       insDoc(aux1, gLnk("BanItem", "", "classBanItem.html"))
       insDoc(aux1, gLnk("chanrec", "", "classchanrec.html"))
       insDoc(aux1, gLnk("classbase", "", "classclassbase.html"))
       insDoc(aux1, gLnk("command_t", "", "classcommand__t.html"))
       insDoc(aux1, gLnk("ConfigReader", "", "classConfigReader.html"))
       insDoc(aux1, gLnk("ConnectClass", "", "classConnectClass.html"))
       insDoc(aux1, gLnk("connection", "", "classconnection.html"))
       insDoc(aux1, gLnk("ExemptItem", "", "classExemptItem.html"))
       insDoc(aux1, gLnk("FileReader", "", "classFileReader.html"))
       insDoc(aux1, gLnk("HostItem", "", "classHostItem.html"))
       insDoc(aux1, gLnk("Invited", "", "classInvited.html"))
       insDoc(aux1, gLnk("InviteItem", "", "classInviteItem.html"))
       insDoc(aux1, gLnk("Module", "", "classModule.html"))
       insDoc(aux1, gLnk("ModuleFactory", "", "classModuleFactory.html"))
       insDoc(aux1, gLnk("packet", "", "classpacket.html"))
       insDoc(aux1, gLnk("Server", "", "classServer.html"))
       insDoc(aux1, gLnk("serverrec", "", "classserverrec.html"))
       insDoc(aux1, gLnk("ucrec", "", "classucrec.html"))
       insDoc(aux1, gLnk("userrec", "", "classuserrec.html"))
       insDoc(aux1, gLnk("Version", "", "classVersion.html"))
aux1 = insFld(foldersTree, gFld("Class Hierarchy", "", "hierarchy.html"))
  aux2 = insFld(aux1, gFld("classbase", "", "classclassbase.html"))
         insDoc(aux2, gLnk("Admin", "", "classAdmin.html"))
         insDoc(aux2, gLnk("chanrec", "", "classchanrec.html"))
         insDoc(aux2, gLnk("command_t", "", "classcommand__t.html"))
         insDoc(aux2, gLnk("ConfigReader", "", "classConfigReader.html"))
         insDoc(aux2, gLnk("ConnectClass", "", "classConnectClass.html"))
    aux3 = insFld(aux2, gFld("connection", "", "classconnection.html"))
           insDoc(aux3, gLnk("serverrec", "", "classserverrec.html"))
           insDoc(aux3, gLnk("userrec", "", "classuserrec.html"))
         insDoc(aux2, gLnk("FileReader", "", "classFileReader.html"))
    aux3 = insFld(aux2, gFld("HostItem", "", "classHostItem.html"))
           insDoc(aux3, gLnk("BanItem", "", "classBanItem.html"))
           insDoc(aux3, gLnk("ExemptItem", "", "classExemptItem.html"))
           insDoc(aux3, gLnk("InviteItem", "", "classInviteItem.html"))
         insDoc(aux2, gLnk("Invited", "", "classInvited.html"))
         insDoc(aux2, gLnk("Module", "", "classModule.html"))
         insDoc(aux2, gLnk("ModuleFactory", "", "classModuleFactory.html"))
         insDoc(aux2, gLnk("packet", "", "classpacket.html"))
         insDoc(aux2, gLnk("Server", "", "classServer.html"))
         insDoc(aux2, gLnk("ucrec", "", "classucrec.html"))
         insDoc(aux2, gLnk("Version", "", "classVersion.html"))
     insDoc(foldersTree, gLnk("Compound Members", "", "functions.html"))
     insDoc(foldersTree, gLnk("File Members", "", "globals.html"))
