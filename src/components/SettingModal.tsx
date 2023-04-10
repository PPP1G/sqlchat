import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import ClearDataButton from "./ClearDataButton";
import LocaleSelector from "./LocaleSelector";
import OpenAIApiConfigView from "./OpenAIApiConfigView";

interface Props {
  show: boolean;
  close: () => void;
}

const SettingModal = (props: Props) => {
  const { show, close } = props;
  const { t } = useTranslation();

  return (
    <div className={`modal modal-middle ${show && "modal-open"}`}>
      <div className="modal-box relative">
        <h3 className="font-bold text-lg">{t("setting.self")}</h3>
        <button className="btn btn-sm btn-circle absolute right-4 top-4" onClick={close}>
          <Icon.IoMdClose className="w-5 h-auto" />
        </button>
        <div className="w-full flex flex-col justify-start items-start space-y-3 pt-4">
          <h3 className="pl-4 text-sm text-gray-500">{t("setting.basic.self")}</h3>
          <div className="w-full border border-gray-200 p-4 rounded-lg">
            <div className="w-full flex flex-row justify-between items-center gap-2">
              <span>{t("setting.basic.language")}</span>
              <LocaleSelector />
            </div>
          </div>

          <OpenAIApiConfigView />

          <h3 className="pl-4 text-sm text-gray-500">{t("setting.data.self")}</h3>
          <div className="w-full border border-red-200 p-4 rounded-lg">
            <div className="w-full flex flex-row justify-between items-center gap-2">
              <span>{t("setting.data.clear-all-data")}</span>
              <ClearDataButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
